package com.gst.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gst.entity.Product;
import com.gst.entity.Sale;
import com.gst.repository.ProductRepository;
import com.gst.repository.SaleRepository;

import java.time.LocalDate;
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

    // Method to calculate total revenue for a specific date
    public double getTotalRevenueForDay(LocalDate date) {
        List<Sale> sales = saleRepository.findBySaleDateBetween(date.atStartOfDay(), date.plusDays(1).atStartOfDay());
        return sales.stream().mapToDouble(Sale::getTotalPrice).sum();
    }

    // Method to calculate total revenue for a specific month
    public double getTotalRevenueForMonth(int year, int month) {
        LocalDate start = LocalDate.of(year, month, 1);
        LocalDate end = start.plusMonths(1);
        List<Sale> sales = saleRepository.findBySaleDateBetween(start.atStartOfDay(), end.atStartOfDay());
        return sales.stream().mapToDouble(Sale::getTotalPrice).sum();
    }

    // Method to calculate total revenue for a specific year
    public double getTotalRevenueForYear(int year) {
        LocalDate start = LocalDate.of(year, 1, 1);
        LocalDate end = start.plusYears(1);
        List<Sale> sales = saleRepository.findBySaleDateBetween(start.atStartOfDay(), end.atStartOfDay());
        return sales.stream().mapToDouble(Sale::getTotalPrice).sum();
    }
}
