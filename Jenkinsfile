pipeline {
    agent any

    environment {
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    }

    stages {
        stage('Saludo') {
            steps {
                sh 'echo "hola a todos desde el pipeline"'
            }
        }

        stage('Saludo2') {
            steps {
                sh 'echo "hola a todos desde el pipeline 2"'
            }
        }

        stage('Proceso de build y test') {
            agent {
                docker {
                    image 'node:22'
                }
            }
            steps {
                sh 'npm ci'
                sh 'npm run test:cov'
            }
        }
    }
}
