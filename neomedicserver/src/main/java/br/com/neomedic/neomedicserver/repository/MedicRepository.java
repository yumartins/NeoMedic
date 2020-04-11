package br.com.neomedic.neomedicserver.repository;

import br.com.neomedic.neomedicserver.model.Medic;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MedicRepository extends PagingAndSortingRepository<Medic, Long> {

//    @Query("SELECT * FROM medic m,\n" +
//            "              clinic c,\n" +
//            "              medic_clinics mc,\n" +
//            "              city ci,\n" +
//            "              specialization s\n" +
//            "        WHERE m.id = mc.medic_id\n" +
//            "            and c.id = mc.clinics_id\n" +
//            "            and c.city_id = ci.id\n" +
//            "            and m.specialization_id = s.id\n" +
//            "            and ci.name = ?1\n" +
//            "            and s.name = ?2;")
//    Page<Medic> findAll(Page page);

}
