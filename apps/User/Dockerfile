FROM user

# create & set working directory
RUN mkdir -p /home/node/main_project_flex
WORKDIR /home/node/main_project_flex

# copy global package.json files
COPY --chown=node package*.json ./

# create & copy dist and package.json file of User
RUN mkdir -p apps/User/dist
COPY --chown=node ./apps/User/package.json ./apps/User/
COPY --chown=node ./apps/User/dist ./apps/User/dist

# install dependencies
RUN npm install -w User --include-workspace-root --ignore-scripts --omit=dev 

ENV HOST=0.0.0.0 PORT=80

EXPOSE ${PORT}
CMD [ "npm", "run", "-w", "User", "start" ]
