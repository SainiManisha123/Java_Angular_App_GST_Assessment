package com.gst.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.gst.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
