package br.com.neomedic.neomedicserver.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import java.util.Date;
import java.util.List;

@Entity(name = "MEDIC")
public class Medic {

    @Id
    @GeneratedValue( strategy = GenerationType.SEQUENCE )
    private long id;

    @Column
    private String name;

    @Column
    private String biography;

    @Column
    private String email;

    @Column
    private Integer age;

    @Column
    private Double consultValue;

    @ManyToOne
    private Specialization specialization;

    @ManyToMany(targetEntity = Clinic.class)
    private List<Clinic> clinics;

    @CreationTimestamp
    @Column
    private Date lastUpdated;

    @UpdateTimestamp
    @Column
    private Date createDate;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBiography() {
        return biography;
    }

    public void setBiography(String biography) {
        this.biography = biography;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Double getConsultValue() {
        return consultValue;
    }

    public void setConsultValue(Double consultValue) {
        this.consultValue = consultValue;
    }

    public Date getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(Date lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Specialization getSpecialization() {
        return specialization;
    }

    public void setSpecialization(Specialization specialization) {
        this.specialization = specialization;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Clinic> getClinics() {
        return clinics;
    }

    public void setClinics(List<Clinic> clinics) {
        this.clinics = clinics;
    }
}
