pipeline {
  
agent any
  


  stages {
   
// Stage 1: Checkout Code from Git
    stage('Application Code Checkout from Git') {
      steps{
        sh 'sudo chown -R jenkins:jenkins /var/lib/jenkins/workspace'
        checkout scm
    }}
    

// Stage 5: Build Docker Image   
 
    stage('Ssh into Virtual Machine') {
        
      when{
        branch 'dev-pipeline'
      }
      steps{
          script {
          try {
             
            sh("chmod +x docker_setup.sh && ./docker_setup.sh ${env.BUILD_ID}")
            
           }

          catch (error) {
            always {
                emailtext body: 'Your most recent build just failed. Kindly check it out on jenkins.', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Build Failed'
              }
              sh "ls ${JENKINS_HOME}/workspace | xargs rm -rf"
           }
        }
        
        }
    }



     






  }


}




