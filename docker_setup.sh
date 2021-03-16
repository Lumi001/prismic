sudo docker build --tag 127.0.0.1:5500/prismic_frontend_public:$1 .
if [ $? -eq 0 ]; then
   echo Deploy Services
   sudo docker service update --image 127.0.0.1:5500/prismic_frontend_public:$1 prismic_frontend_public
   
   if [ $? -eq 0 ]; then
   echo "Y" | docker system prune -a
   echo Updated Services Successfully

   else
    echo Fresh Deployment
    sudo docker service create -p 5500:5500 --name prismic_frontend_public 127.0.0.1:5500/prismic_frontend_public:$1 
    if [ $? -eq 0 ]; then
    echo "First Deployment Successful"
    else
    exit 1
    echo "First Deployment Failed"
    fi
   fi

else
   exit 1
   echo Error In Build or Push Process
fi










