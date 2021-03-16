FROM node:alpine as builder

#set working directory
RUN mkdir -p /var/www/app/prismic_frontend_public
WORKDIR /var/www/app/prismic_frontend_public

#copy package.json to working dir to prevent reinstallation
#of npm packages 
COPY ./package.json ./

#run package installations
RUN npm install

#copy the project into the working dir
COPY . /var/www/app/prismic_frontend_public




RUN npm run build

EXPOSE 5500

CMD ["npm","start"]