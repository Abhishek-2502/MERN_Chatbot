pipeline {
    agent { label 'mern_chatbot' }

    environment {
        ENV_PATH = '/home/ubuntu/chatserver.env' // your environment file on EC2
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Inject .env') {
            steps {
                echo 'Copying .env into chatserver folder...'
                sh '''
                    cp $ENV_PATH chatserver/.env
                    ls -la chatserver/
                '''
            }
        }

        stage('Pre-Build Cleanup') {
            steps {
                echo 'Pruning unused Docker resources before build...'
                sh '''
                    docker-compose down --remove-orphans --volumes || true
                    docker container rm -f chatbot_backend || true
                    docker container rm -f chatbot_frontend || true
                    docker system prune -f --volumes || true
                '''
            }
        }

        stage('Build and Deploy') {
            steps {
                echo 'Building and starting Docker containers...'
                sh '''
                    docker-compose build --no-cache
                    docker-compose up -d
                '''
            }
        }
    }

    post {
        always {
            echo 'Build and deployment process finished.'
            sh 'docker-compose ps'
        }
        failure {
            echo 'Build failed!'
        }
        success {
            echo 'Build and deployment successful!'
        }
    }
}
