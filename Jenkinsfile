pipeline {

    agent any

    //escenarios -> escenario -> pasos
    stages{
        stage ("saludo a usuario") {
            steps{
                sh 'echo "comenzando mi pipeline"'
            }
        }
        stage ("salida de los saludos a usuario") {
            steps{
                sh '"saliendo de este grupo de escenarios"'
            }
        }

        stage ("proceso de build y test") {
            agent {
                docker {
                    image 'node:22'
                    reuseNode true
                }
            }

            stages {
                stage("instalacion de dependencias"){
                    steps{
                        sh 'npm ci'
                    }
                }
            }

        }
    }
}