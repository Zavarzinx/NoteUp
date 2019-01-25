package project.note.NoteUpapi.mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class FeedbackSender {

    @Autowired
    private JavaMailSender mailSender;

    public void sendFeedback(String from, String name, String feedback) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();

        mailMessage.setTo("kellou4@yandex.ru");
        mailMessage.setSubject("New feedback from " + name);
        mailMessage.setText(feedback);
        mailMessage.setFrom(from);

        mailSender.send(mailMessage);
    }
}