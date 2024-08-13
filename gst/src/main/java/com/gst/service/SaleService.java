package com.gst.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gst.entity.Product;
import com.gst.entity.Sale;
import com.gst.repository.ProductRepository;
import com.gst.repository.SaleRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    @Autowired
    private ProductRepository productRepository;

    public Sale createSale(Sale sale) {
        // Fetch the product from the repository
        Optional<Product> productOptional = productRepository.findById(sale.getProduct().getId());
        if (productOptional.isEmpty()) {
            throw new RuntimeException("Product not found");
        }

        Product product = productOptional.get();

        // Calculate tax amount and total price
        double taxAmount = product.getPrice() * (product.getCategory().getGstRate() / 100.0);
        double totalPrice = sale.getQuantity() * (product.getPrice() + taxAmount);

        // Set calculated values in sale
        sale.setTaxAmount(taxAmount);
        sale.setTotalPrice(totalPrice);
        sale.setSaleDate(LocalDateTime.now());

        // Save and return the sale
        return saleRepository.save(sale);
    }

    public List<Sale> getAllSales() {
        return saleRepository.findAll();
    }

    public List<Sale> getSalesForDateRange(LocalDateTime start, LocalDateTime end) {
        return saleRepository.findBySaleDateBetween(start, end);
    }
}
