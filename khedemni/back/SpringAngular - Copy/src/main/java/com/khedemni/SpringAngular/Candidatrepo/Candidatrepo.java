package com.khedemni.SpringAngular.Candidatrepo;

import com.khedemni.SpringAngular.entity.Candidat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository


public interface Candidatrepo extends JpaRepository<Candidat,Integer> {

}
