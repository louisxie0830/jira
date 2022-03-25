FROM maven as builder
WORKDIR /app
COPY . .
RUN rm -rf target
RUN chmod -R 777 ./
RUN mvn clean compile package


FROM openjdk:8-jdk-alpine AS runner
WORKDIR /app
RUN addgroup -S spring && adduser -S spring -G spring

COPY --from=builder /app/target/api.jar .
USER spring:spring


ENTRYPOINT ["java","-Dserver.port=80","-jar","./api.jar"]