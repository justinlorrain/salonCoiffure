import React, { useEffect, useState } from "react";
import axios from "axios";

const Agenda = ({ clientId }) => {
  const [employes, setEmployes] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedEmploye, setSelectedEmploye] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [clientInfo, setClientInfo] = useState({
    nom: "",
    numeroTelephone: "",
  });
  const [rendezvous, setRendezVous] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const employesResponse = await axios.get(
        "http://localhost:8080/api/employes/employes"
        // {
        //   headers: {
        //     Authorization: "Bearer your-token-here", // Ajoutez ceci si vous utilisez des tokens
        //   },
        // }
      );

      const servicesResponse = await axios.get(
        "http://localhost:8080/api/services"
      );
      const rendezvousResponse = await axios.get(
        "http://localhost:8080/api/employes/rendezvous"
      );

      setEmployes(employesResponse.data);
      setServices(servicesResponse.data);
      setRendezVous(rendezvousResponse.data); // Récupérer les rendez-vous
    };

    fetchData();
  }, []);

  const handleRendezVous = async () => {
    const clientId = 1;
    const data = {
      date,
      duree: selectedService ? selectedService.duree : null,
      heure: `${heure}:00`,
      nom_client: clientInfo.nom,
      numero_telephone_client: clientInfo.numeroTelephone,
      employe_id: selectedEmploye,
      user_id: clientId,
    };

    try {
      const response = await axios.post(
        `http://localhost:8080/clients/${clientId}/rendezvous`,
        data
      );
      alert(response.data);
      // Mettre à jour l'affichage après la réservation
      setRendezVous([...rendezvous, data]);
    } catch (error) {
      console.error("Erreur lors de la réservation", error);
      alert("Erreur lors de la réservation");
    }
  };

  return (
    <div>
      <h1>Prendre un Rendez-vous</h1>

      {/* Informations sur le client */}
      <div>
        <label>Nom du Client</label>
        <input
          type="text"
          value={clientInfo.nom}
          onChange={(e) =>
            setClientInfo({ ...clientInfo, nom: e.target.value })
          }
        />
      </div>

      <div>
        <label>Numéro de Téléphone</label>
        <input
          type="text"
          value={clientInfo.numeroTelephone}
          onChange={(e) =>
            setClientInfo({ ...clientInfo, numeroTelephone: e.target.value })
          }
        />
      </div>

      {/* Sélectionner un employé */}
      <div>
        <label>Choisir un Employé</label>
        <select onChange={(e) => setSelectedEmploye(parseInt(e.target.value))}>
          <option value="">Sélectionnez un employé</option>
          {employes.map((employe) => (
            <option key={employe.id} value={employe.id}>
              {employe.nom} {employe.prenom}
            </option>
          ))}
        </select>
      </div>

      {/* Sélectionner un service */}
      <div>
        <label>Choisir un Service</label>
        <select
          onChange={(e) =>
            setSelectedService(
              services.find(
                (service) => service.id === parseInt(e.target.value)
              )
            )
          }
        >
          <option value="">Sélectionnez un service</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.nom} - {service.duree}
            </option>
          ))}
        </select>
      </div>

      {/* Date et heure */}
      <div>
        <label>Date</label>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
      </div>

      <div>
        <label>Heure</label>
        <input type="time" onChange={(e) => setHeure(e.target.value)} />
      </div>

      <button onClick={handleRendezVous}>Réserver</button>

      {/* Afficher l'agenda de tous les employés */}
      <h2>Agenda des Employés</h2>
      {employes.map((employe) => (
        <div key={employe.id}>
          <h3>
            {employe.nom} {employe.prenom}
          </h3>
          <ul>
            {rendezvous
              .filter((rdv) => rdv.employe_id === employe.id)
              .map((rdv, index) => (
                <li key={index}>
                  {rdv.date} à {rdv.heure} - {rdv.nom_client}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Agenda;
