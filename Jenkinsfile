pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub-creds')
        DOCKER_IMAGE = "mkadermasry2002/myapp"
    }

    stages {
        stage("Clone Repo") {
            steps {
                git branch: 'main', url: 'https://github.com/ahmedelmasry2002/CI-CD-Pipeline-with-Jenkins-on-Kubernetes'
            }
        }

        stage("Build Docker Image") {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:$BUILD_NUMBER .'
            }
        }

        stage("Login to Docker Hub") {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage("Push Image") {
            steps {
                sh 'docker push $DOCKER_IMAGE:$BUILD_NUMBER'
            }
        }

        stage("Deploy to Kubernetes") {
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
                sh 'kubectl apply -f k8s/service.yaml'
            }
        }
    }
}
