pipeline {

    agent any

    //escenarios -> escenario -> pasos

    stages {

        stage ("saludo a usuario"){
            steps{
                sh 'echo "hola atodos"'
            }
        }
        stage ("saludo a usuario"){
            steps{
                sh 'echo "hola a prueba"'
            }
        }
    }

    stages {

        stage ("proceso build y test"){
            agent {
                docker {
                    image 'node:22'
                    reuseNode true
                }
            }
            stages {
                stage ("instalación de dependencias") {
                    steps {
                        sh 'npm ci'
                    }
                }
            }
        }

    }
}