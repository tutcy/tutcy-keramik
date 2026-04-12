# Build stage
FROM ghcr.io/graalvm/jdk-community:21 AS builder
WORKDIR /app

# The ghcr.io/graalvm image lacks xargs, which Gradle requires. Installing it manually.
RUN microdnf install -y findutils && microdnf clean all

# Copy Gradle wrapper and configuration files
COPY gradlew .
COPY gradle gradle
COPY build.gradle.kts .
COPY settings.gradle.kts .

# Download dependencies to cache them in a Docker layer
RUN ./gradlew --version

# Copy the source code
COPY src src

# Add application version to application.yml if provided
ARG FULL_VERSION="not available"
RUN if [ -f src/main/resources/application.yml ]; then \
    echo "info.app.version: ${FULL_VERSION}" >> src/main/resources/application.yml; \
    fi

# Build the Spring Boot application
RUN ./gradlew bootJar

# Run stage
FROM ghcr.io/graalvm/jdk-community:21
WORKDIR /app

# Set active Spring profile to prod by default
ENV SPRING_PROFILES_ACTIVE="prod"

# Copy the built JAR from the builder stage
COPY --from=builder /app/build/libs/backend-*.jar backend.jar

# Expose the application port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "backend.jar"]
