#USED  the latest LTS  version of node.js
FROM node:22-alpine

# make a working directory where all the code will be copied
WORKDIR /app

#copy package.json and package-lock.json
COPY package*.json ./

#install Dependencies
RUN npm install


#Copy the rest code of my website
COPY . .

#EXPOSE THE PORT WHERE I WANT TO RUN THE APP. 
EXPOSE 5173

#COMMNADS TO RUN THE APP
CMD ["npm", "run", "dev", "--", "--host"]




