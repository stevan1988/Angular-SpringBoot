package io.springdemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

/**
 * Created by stevan on 22.01.2018.
 */
    @SpringBootApplication
    @EnableCaching

    @ComponentScan(basePackages = "io.springdemo")
    @EnableAspectJAutoProxy
    public class Application {
        public static void main(String [] args){
            SpringApplication.run(Application.class, args);
        }
    }
