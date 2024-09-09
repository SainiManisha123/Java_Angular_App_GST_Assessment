package com.gst.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.gst.entity.Sale;
import java.time.LocalDateTime;
import java.util.List;

public interface SaleRepository extends JpaRepository<Sale, Long> {
    List<Sale> findBySaleDateBetween(LocalDateTime start, LocalDateTime end);
}
