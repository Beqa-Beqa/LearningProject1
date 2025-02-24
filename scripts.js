const tourModal = document.getElementById('tourModal')
if (tourModal) {
  tourModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const tourName = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = tourModal.querySelector('.modal-title')

    modalTitle.textContent = `Fill information for ${tourName}`
  })
}