package com.restaurantqr.controllers;

import com.restaurantqr.models.MenuItem;
import com.restaurantqr.repositories.MenuItemRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/menu")
public class MenuController {

    private final MenuItemRepository menuRepo;

    public MenuController(MenuItemRepository menuRepo) {
        this.menuRepo = menuRepo;
    }

    @GetMapping
    public List<MenuItem> getAllMenuItems() {
        return menuRepo.findAll();
    }
}