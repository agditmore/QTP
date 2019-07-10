package io.qdivision.qtp.repository;
import io.qdivision.qtp.model.Song;
import java.util.*;

public class SongRepository {

    Map<String, Song> songMap = new HashMap<>();

    public Song save(Song newSong){
        validate(newSong);
        var id = UUID.randomUUID().toString();
        newSong.setId(id);
        songMap.put(id, newSong);
        return newSong;
    }

    private void validate(Song newSong) {
        if (newSong.getArtist()==null || newSong.getName()==null){
            throw new IllegalArgumentException("artist and name cannot be null");
        }
    }

    public Song findById(String id) {
        var song = songMap.get(id);
        if (song == null){
            throw new SongNotFoundException();
        } else {
            return song;
        }
    }

    public List<Song> findSongs(){
        return new ArrayList<>(songMap.values());
    }

    public void deleteById(String id){
        var song = songMap.remove(id);
        if (song == null){
            throw new SongNotFoundException();
        }
    }

    public Song replaceById(String id, Song newSong){
        var replacedSong = findById(id);
        replacedSong.setArtist(newSong.getArtist());
        replacedSong.setName(newSong.getName());
        return replacedSong;
    }
}
