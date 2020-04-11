package br.com.neomedic.neomedicserver.model;


import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.Date;
import java.util.List;

@Entity
public class Scheduling {

    @Id
    @GeneratedValue( strategy = GenerationType.SEQUENCE )
    private long id;

    @Column
    private Date dayAndHour;

    @ManyToOne
    private Medic medic;

    @ManyToOne
    private Patient patient;

    @ManyToOne
    private Clinic clinic;

    @Enumerated(EnumType.STRING)
    private SchedulingType type;

    @OneToMany
    private List<ConsultAttributes> schedulingInformation;

    @OneToMany
    private List<ConsultAttributes> medicalData;

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

    public Date getDayAndHour() {
        return dayAndHour;
    }

    public void setDayAndHour(Date dayAndHour) {
        this.dayAndHour = dayAndHour;
    }

    public Medic getMedic() {
        return medic;
    }

    public void setMedic(Medic medic) {
        this.medic = medic;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Clinic getClinic() {
        return clinic;
    }

    public void setClinic(Clinic clinic) {
        this.clinic = clinic;
    }

    public List<ConsultAttributes> getSchedulingInformation() {
        return schedulingInformation;
    }

    public void setSchedulingInformation(List<ConsultAttributes> schedulingInformation) {
        this.schedulingInformation = schedulingInformation;
    }

    public List<ConsultAttributes> getMedicalData() {
        return medicalData;
    }

    public void setMedicalData(List<ConsultAttributes> medicalData) {
        this.medicalData = medicalData;
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

    public SchedulingType getType() {
        return type;
    }

    public void setType(SchedulingType type) {
        this.type = type;
    }
}
