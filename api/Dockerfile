FROM maven as builder
WORKDIR /app
COPY . .
RUN rm -rf target
RUN chmod -R 777 ./
RUN mvn clean install -DskipTests -Pprod


FROM openjdk:8-jdk-alpine AS runner
WORKDIR /app
RUN addgroup -S spring && adduser -S spring -G spring

COPY --from=builder /app/target/api.jar .
RUN sh -c 'touch api.jar'
USER spring:spring

ENTRYPOINT ["java","-jar","./api.jar"]

EXPOSE 80