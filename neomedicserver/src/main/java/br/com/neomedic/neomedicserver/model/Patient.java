package br.com.neomedic.neomedicserver.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Date;
import java.util.List;

@Entity
public class Patient {

    @Id
    @GeneratedValue( strategy = GenerationType.SEQUENCE )
    private long id;

    @Column
    private String name;

    @Column
    private Date birthday;

    @Column
    private String address;

    @Column
    private String phone;

    @OneToMany
    private List<MedicalInformation> medicalInformation;

    @CreationTimestamp
    @Column
    private Date lastUpdated;

    @UpdateTimestamp
    @Column
    private Date createDate;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public List<MedicalInformation> getMedicalInformation() {
        return medicalInformation;
    }

    public void setMedicalInformation(List<MedicalInformation> medicalInformation) {
        this.medicalInformation = medicalInformation;
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
}
