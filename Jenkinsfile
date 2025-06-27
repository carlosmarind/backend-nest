pipeline {
    agent any

    environment {
        NPM_CONFIG_CACHE= "${WORKSPACE}/.npm"
    }
    stages{
        stage ('Saludo'){
            steps{
                sh 'echo "hola a todos desde el pipeline"'

            }
        }
        stage{('Saludo2'){
            steps{
                sh 'echo "hola a todos desde el pipeline 2"'

            }
        }
    }
    stages{
        stage ('proceso de build y test'){
            agent {
                docker{
                    image: 'node:22'
                }
            }
            stages{
                stage("instalacion de dependencias"){
                    steps{
                        sh 'npm ci'
                    }
                }
                stage("test"){
                    steps{
                        sh 'npm run test:cov'
                    }
                }
            }
        }
    }
}