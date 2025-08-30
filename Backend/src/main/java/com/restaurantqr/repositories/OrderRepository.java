package com.restaurantqr.repositories;

import com.restaurantqr.models.OrderInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<OrderInfo, Long> {}