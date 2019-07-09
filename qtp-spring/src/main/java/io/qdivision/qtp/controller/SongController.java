package io.qdivision.qtp.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import io.qdivision.qtp.model.Song;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
public class SongController {

    @RequestMapping("/songs")
    public List<Song> getSongs(@RequestParam(value="artist") String artist){
        var song1 = new Song();
        song1.setArtist("Rush");
        song1.setName("Spirit of Radio");
        var song2 = new Song();
        song2.setArtist("OneRepublic");
        song2.setName("Counting Stars");
        var song3 = new Song();
        song3.setArtist("OneRepublic");
        song3.setName("Connection");
        List<Song> songs = new ArrayList<Song>();
        songs.add(song1);
        songs.add(song2);
        songs.add(song3);
        var filteredSongs = songs.stream().filter(song -> artist.equals(song.getArtist())).collect(Collectors.toList());
        return filteredSongs;
    }
}
