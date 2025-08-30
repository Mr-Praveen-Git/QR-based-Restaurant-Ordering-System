package com.restaurantqr.repositories;

import com.restaurantqr.models.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {}