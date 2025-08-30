package com.restaurantqr.controllers;

import com.restaurantqr.models.*;
import com.restaurantqr.repositories.*;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    private final OrderRepository orderRepo;
    private final OrderItemRepository orderItemRepo;
    private final TableRepository tableRepo;
    private final MenuItemRepository menuRepo;

    public OrderController(OrderRepository orderRepo, OrderItemRepository orderItemRepo,
                           TableRepository tableRepo, MenuItemRepository menuRepo) {
        this.orderRepo = orderRepo;
        this.orderItemRepo = orderItemRepo;
        this.tableRepo = tableRepo;
        this.menuRepo = menuRepo;
    }

    @PostMapping
    public String placeOrder(@RequestBody OrderRequest request) {
        Optional<TableInfo> tableOpt = tableRepo.findById(request.getTableId());
        if (!tableOpt.isPresent()) return "Invalid table ID";

        OrderInfo order = new OrderInfo();
        order.setTable(tableOpt.get());
        order.setStatus("PENDING");
        order.setTimestamp(new Date());
        order = orderRepo.save(order);

        for (OrderRequest.Item item : request.getItems()) {
            Optional<MenuItem> menuOpt = menuRepo.findById(item.getMenuItemId());
            if (menuOpt.isPresent()) {
                OrderItem oi = new OrderItem(null, order, menuOpt.get(), item.getQuantity());
                orderItemRepo.save(oi);
            }
        }
        return "Order placed successfully";
    }

    @GetMapping
    public List<OrderInfo> getAllOrders() {
        return orderRepo.findAll();
    }

    @PutMapping("/{id}/status")
    public String updateStatus(@PathVariable Long id, @RequestParam String status) {
        Optional<OrderInfo> orderOpt = orderRepo.findById(id);
        if (!orderOpt.isPresent()) return "Order not found";
        OrderInfo order = orderOpt.get();
        order.setStatus(status);
        orderRepo.save(order);
        return "Status updated";
    }
}