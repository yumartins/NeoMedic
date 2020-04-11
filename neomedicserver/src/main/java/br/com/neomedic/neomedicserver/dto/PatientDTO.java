package br.com.neomedic.neomedicserver.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;
import java.util.List;

public class PatientDTO {

    private long id;

    private String name;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date birthday;

    private String address;

    private String phone;

    private List<MedicalInformationDTO> medicalInformations;

    public List<MedicalInformationDTO> getMedicalInformations() {
        return medicalInformations;
    }

    public void setMedicalInformations(List<MedicalInformationDTO> medicalInformations) {
        this.medicalInformations = medicalInformations;
    }

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
}
