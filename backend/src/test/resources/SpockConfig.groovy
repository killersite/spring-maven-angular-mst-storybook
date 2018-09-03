import org.springframework.boot.test.context.SpringBootTest

runner {
    println "Using SpockConfig"

    if (Boolean.valueOf(System.properties['spock.enable.integration-tests']) == true) {
        include SpringBootTest
    } else {
        exclude SpringBootTest
    }
}