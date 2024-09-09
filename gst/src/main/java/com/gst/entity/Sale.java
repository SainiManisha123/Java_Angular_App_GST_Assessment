package com.gst.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "sales")
@NoArgsConstructor
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    private int quantity;
    private double totalPrice;
    private double taxAmount;

    @Column(name = "sale_date")
    private LocalDateTime saleDate;

    // Getters and setters
}
