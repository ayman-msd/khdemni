package com.khedemni.SpringAngular.Offrerepo;

import com.khedemni.SpringAngular.entity.Offre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository


public interface Offrerepo extends JpaRepository<Offre,Integer> {

}
