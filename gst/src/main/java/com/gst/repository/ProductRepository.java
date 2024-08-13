package com.gst.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.gst.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
