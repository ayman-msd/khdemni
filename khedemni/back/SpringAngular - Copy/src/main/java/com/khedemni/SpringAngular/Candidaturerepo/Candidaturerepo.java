package com.khedemni.SpringAngular.Candidaturerepo;


import com.khedemni.SpringAngular.entity.Candidature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository


public interface Candidaturerepo extends JpaRepository<Candidature,Integer> {



}
