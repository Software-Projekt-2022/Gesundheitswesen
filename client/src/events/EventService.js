const amqp = require('amqplib/callback_api');


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

connect(() => {
    listenForEvents();
})