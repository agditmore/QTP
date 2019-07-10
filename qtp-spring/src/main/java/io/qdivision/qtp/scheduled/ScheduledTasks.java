package io.qdivision.qtp.scheduled;

import java.text.SimpleDateFormat;
import java.util.Date;

import lombok.extern.slf4j.Slf4j; //this is a simple logging facade for java
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
//logging: (worse) FATAL | ERROR | WARN | INFO | DEBUG | TRACE (better)
//default is INFO -- see application.yaml

@Component
@Slf4j
public class ScheduledTasks {
    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

    @Scheduled(cron = "0/5 * * * * MON-FRI")
    public void reportTime(){
        log.info("The time is now {}", dateFormat.format(new Date()));
        log.debug("debugging");
    }
}
