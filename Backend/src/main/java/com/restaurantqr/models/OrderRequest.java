package com.restaurantqr.models;

import lombok.Data;
import java.util.List;

@Data
public class OrderRequest {
    private Long tableId;
    private List<Item> items;

    @Data
    public static class Item {
        private Long menuItemId;
        private int quantity;
    }
}