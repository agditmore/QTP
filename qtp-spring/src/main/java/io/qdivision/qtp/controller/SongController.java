package io.qdivision.qtp.controller;

//import org.springframework.web.bind.annotation.RequestMapping;
import io.qdivision.qtp.repository.SongRepository;
import org.springframework.web.bind.annotation.*;
import io.qdivision.qtp.model.Song;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
//import java.util.stream.Collectors;

@RestController
public class SongController {

    private SongRepository repository = new SongRepository();

    @GetMapping("/songs")
    public List<Song> getSongs(){
        var song1 = new Song();
        song1.setArtist("Rush");
        song1.setName("Spirit of Radio");
        song1.setId(UUID.randomUUID().toString());
        var song2 = new Song();
        song2.setArtist("OneRepublic");
        song2.setName("Counting Stars");
        song2.setId(UUID.randomUUID().toString());
        var song3 = new Song();
        song3.setArtist("OneRepublic");
        song3.setName("Connection");
        song3.setId(UUID.randomUUID().toString());
        List<Song> songs = new ArrayList<Song>();
        songs.add(song1);
        songs.add(song2);
        songs.add(song3);
        //var filteredSongs = songs.stream().filter(song -> artist.equals(song.getArtist())).collect(Collectors.toList());
        return songs;
    }

    @PostMapping("/songs")
    public Song newSong(@RequestBody Song newSong){
        return repository.save(newSong);
    }

    @GetMapping("/songs/{id}")
    public Song getSongById(@PathVariable String id){
        return repository.findById(id);
    }
}
