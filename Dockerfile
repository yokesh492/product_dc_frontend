# Step 1: Build the Next.js application
# Use the official Node.js 16 image as the base image
FROM node:16-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./
# If you're using yarn, uncomment the next line and delete the npm install line
# COPY yarn.lock ./

# Install dependencies
RUN npm install
# If you're using yarn, uncomment the next line and delete the npm install line
# RUN yarn install

# Copy the rest of your Next.js application to the container
COPY . .

# Build your Next.js application for production
RUN npm run build
# If you're using yarn, uncomment the next line and delete the npm run build line
# RUN yarn build

# Step 2: Serve the Next.js application using a minimal Node image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built artifacts from the builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
# If you're using yarn, uncomment the next line and delete the npm start line
# CMD ["yarn", "start"]
