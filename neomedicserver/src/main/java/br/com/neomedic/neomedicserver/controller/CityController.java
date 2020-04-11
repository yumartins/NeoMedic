package br.com.neomedic.neomedicserver.controller;

import br.com.neomedic.neomedicserver.model.City;
import br.com.neomedic.neomedicserver.service.CityService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/city")
public class CityController {

    private final CityService cityService;

    public CityController(CityService cityService) {
        this.cityService = cityService;
    }


    @GetMapping
    public ResponseEntity findAllCity() {
        Optional cities = cityService.findAllCity();

        return createResponse(cities);
    }

    @GetMapping("/{id}")
    public ResponseEntity findCityById(@PathVariable Long id){
        Optional city = cityService.findCityById(id);

        return createResponse(city);
    }

    @PostMapping
    public ResponseEntity createNewCity(@RequestBody City city) {
        Optional citySaved = cityService.createCity(city);
        return createResponse(citySaved);
    }

    private ResponseEntity createResponse(Optional response) {
        if (response.isPresent()) {
            return ResponseEntity.ok(response.get());
        }
        return ResponseEntity.notFound().build();
    }
}
