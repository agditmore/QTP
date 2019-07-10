package io.qdivision.qtp.controller;

import io.qdivision.qtp.repository.SongNotFoundException;
import io.qdivision.qtp.repository.SongRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import io.qdivision.qtp.model.Song;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@Slf4j
public class SongController {

    private SongRepository repository = new SongRepository();

    @PostMapping("/songs")
    @ResponseStatus(HttpStatus.CREATED)
    public Song newSong(@RequestBody Song newSong){
        log.info("New song: {}, which is nice.", newSong);
        return repository.save(newSong);
    }

    @GetMapping("/songs/{id}")
    public Song getSongById(@PathVariable String id){
        return repository.findById(id);
    }

    @GetMapping("/songs")
    public List<Song> getAllSongs(@RequestParam(value="name", defaultValue = "") String name){
        if (name.equals("")){
            return repository.findSongs();
        } else {
            return repository.findSongs().stream()
                    .filter(song -> name.equals(song.getName()))
                    .collect(Collectors.toList());
        }
    }

    @PutMapping("/songs/{id}")
    public Song replaceSong(@RequestBody Song newSong, @PathVariable String id){
        return repository.replaceById(id, newSong);
    }

    @DeleteMapping("/songs/{id}")
    public void deleteSongById(@PathVariable String id){
        repository.deleteById(id);
    }

    @ExceptionHandler(SongNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ResponseBody()
    public String songNotFoundHandler(SongNotFoundException ex){
        return "Song Not Found";
    }

    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ResponseBody()
    public String illegalArgumentHandler(IllegalArgumentException ex){
        log.error("You can't do that", ex);
        return ex.getMessage();
    }
}
