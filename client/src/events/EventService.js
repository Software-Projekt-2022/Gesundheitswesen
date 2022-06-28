const amqp = require('amqplib/callback_api');


const microservice_name = 'microservice.gesundheit';
const microservice_prefix = 'GES-';
const microservice_exchange = 'publish_event.gesundheit';
const microservice_queue = 'microservice.gesundheit';

let amqp_channel = null;

const connect = () => {

    amqp.connect("amqp://rabbitmq:5672", (err, connection) => {
        if(err) throw err

        connection.on('close', () => {
            console.log("RabbitMQ connection closed");
            connection = null
        })

        connection.createChannel((ch_err, ch) =>{
            if(ch_err){
                connection.close();
                connection = null;
                err(ch_err)
                return
            }

            amqp_channel = ch;
        })
    })
}

const onEventRecieved = (event) => console.log('Event recieved %s: %s',event.event_type, JSON.stringify(event));

const listenForEvents = (callback) => {
    amqp_channel.prefetch(1);
    amqp_channel.consume(microservice_queue, (msg) => {
        if(msg.content){
            onEventRecieved(msg.content.toString);
            callback(JSON.parse(msg.content.toString()));
        }
    }, {noAck: true}
    )
}

const sendEvent = () => {

    const makeEvent = () => {
        return {
            event_id: microservice_prefix + Date.now(),
            event_type: "gesunheitsBroadcast",
            event_origin: microservice_name,
            event_time: new Date().toISOString(),
            content:{
                message: "Das ist eine Nachricht vom Gesundheitswesen ;)"
            }
        };
    }

    var event = makeEvent();
    var msg = JSON.stringify(event);

    //Verwendet die Exchange des Microservices und event_type als Rounting-Key
    //Sendet das Event
    amqp_channel.publish(microservice_exchange, event.event_type, Buffer.from(msg));
    console.log('Sent event %s: "%s"', event.event_type, msg);
}

connect(() => {
    listenForEvents();
    sendEvent();
})