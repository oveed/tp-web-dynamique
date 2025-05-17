import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function PublicationApp() {
  const [publications, setPublications] = useState([]);
  const [afficherModal, setAfficherModal] = useState(false);
  const [newPub, setnewPub] = useState({ titre: "", description: "", image_path: "", categorie: "" });
  const [idModif, setidModif] = useState(null);

  const chargerPubs = () => {
    axios.get("http://localhost:8000/api/publication")
      .then((reponse) => {
        setPublications(reponse.data);
        if (reponse.data.length === 0) {
          toast.info("Pas de publications.");
        }
      })
      .catch((err) => {
        toast.error("Erreur lors de chargement des publications");
        console.error(err);
      });
  };

  const addPub = () => {
    axios.post("http://localhost:8000/api/publication", newPub)
      .then(() => {
        setAfficherModal(false);
        setnewPub({ titre: "", description: "", image_path: "", categorie: "" });
        toast.success("Publication ajoutée avec succès !");
        chargerPubs();
      })
      .catch(err => {
        toast.error("Erreur lors de l'ajout de la publication !");
        console.error(err);
      });
  };

  const updatePub = () => {
    axios.put(`http://localhost:8000/api/publication/${idModif}`, newPub)
      .then(() => {
        setAfficherModal(false);
        setnewPub({ titre: "", description: "", image_path: "", categorie: "" });
        setidModif(null);
        toast.success("Publication modifiée avec succès !");
        chargerPubs();
      })
      .catch(erreur => {
        toast.error("Erreur lors de la modification !");
        console.error(erreur);
      });
  };

  const deletePub = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette publication ?")) {
      axios.delete(`http://localhost:8000/api/publication/${id}`)
        .then(() => {
          setPublications(pubRestantes => pubRestantes.filter(publication => publication.id !== id));
          toast.success("Publication supprimée avec succès !");
        })
        .catch(erreur => {
          toast.error("Erreur lors de la suppression !");
          console.error(erreur);
        });
    }
  };



  return (
    <>
      <ToastContainer />
      <div className="container mt-4">
        <div className="mb-4 d-flex justify-content-center gap-3">
          {!publications.length && (
            <>
              <button className="btn btn-success" onClick={() => {
                setnewPub({ titre: "", description: "", image_path: "", categorie: "" });
                setidModif(null);
                setAfficherModal(true);
              }}>Ajouter une publication</button>
              <button className="btn btn-primary" onClick={chargerPubs}>Charger les publications</button>
            </>
          )}
          {publications.length > 0 && (
            <button className="btn btn-success mx-auto" onClick={() => setAfficherModal(true)}>Ajouter une publication</button>
          )}
        </div>

        <div className="row">
          {publications.map((publication, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="panel widget border rounded shadow-sm p-3">
                <div className="row row-table row-flush">
                  <div className="col-xs-5">
                    <img
                      src={publication.image_path}
                      alt={publication.titre}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-xs-7 align-middle p-3">
                    <div className="d-flex justify-content-between mb-3">
                      <button
                        onClick={() => deletePub(publication.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Supprimer
                      </button>
                      <button
                        onClick={() => {
                          setnewPub({
                            titre: publication.titre,
                            description: publication.description,
                            image_path: publication.image_path,
                            categorie: publication.categorie
                          });
                          setidModif(publication.id);
                          setAfficherModal(true);
                        }}
                        className="btn btn-warning btn-sm"
                      >
                        Modifier
                      </button>
                    </div>
                    <p>
                      <strong>{publication.titre}</strong>
                    </p>
                    <p className="text-muted">Catégorie : {publication.categorie}</p>
                    <p>{publication.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {afficherModal && (
          <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content p-1">
                <div className="modal-header d-flex justify-content-between">
                  <h5 className="modal-title">Ajouter une publication</h5>
                  <button type="button" className="btn-close" onClick={() => {
                    setAfficherModal(false);
                    setnewPub({ titre: "", description: "", image_path: "", categorie: "" });
                  }}>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group mb-3">
                    <label className="mb-1">Titre</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newPub.titre}
                      onChange={(e) => setnewPub({ ...newPub, titre: e.target.value })}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="mb-1">Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={newPub.description}
                      style={{ maxHeight: "100px" }}
                      onChange={(e) => setnewPub({ ...newPub, description: e.target.value })}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="mb-1">Catégorie</label>
                    <div className="position-relative">
                      <select
                        className="form-control custom-select"
                        value={newPub.categorie}
                        onChange={(e) => setnewPub({ ...newPub, categorie: e.target.value })}
                        style={{
                          appearance: "auto"
                        }}
                      >
                        <option value="">Choisissez une catégorie</option>
                        <option value="cinema">Cinéma</option>
                        <option value="art">Art</option>
                        <option value="musique">Musique</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label className="mb-1">Image URL</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newPub.image_path}
                      onChange={(e) => setnewPub({ ...newPub, image_path: e.target.value })}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setAfficherModal(false)}>Annuler</button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={idModif ? updatePub : addPub}
                  >
                    {idModif ? "Mettre à jour" : "Créer"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

