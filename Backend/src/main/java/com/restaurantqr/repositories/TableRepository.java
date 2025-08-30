package com.restaurantqr.repositories;

import com.restaurantqr.models.TableInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TableRepository extends JpaRepository<TableInfo, Long> {}