# Gesundheitswesen

### Properties
- Backend: "src/backendMain/resources/application.properties"
es wird noch nach einer Migrationsmöglichkeit geschaut, ansonsten liegt ein sehr simples Skript in "/src/commonMain/migration/v1_tables.sql"
  - Default: 
      - Port: 8080
 

- Frontend: "/gradle.properties"
  Die ersten 4 Variablen sind als Umgebungsvariablen gedacht wovon bisher "jsDeploymentOpen" nicht genutzt wird.
  - Default: 
      - Port 3000
      - Host: 127.0.0.1
      - DeploymentProxy: 8080

### Starten
- Frontend = "./gradlew -t frontendRun" 
- Backend = "./gradlew -t backendRun"


Es soll auch eine Optimierte Version durch "./gradlew clean jar" geben diese habe ich selbst bisher nicht ausgetestet

(Windows: Statt ./gradlew = gradlew.bat)
