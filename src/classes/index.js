export default class Patient {
  constructor () {
    this.id = ''
    this.firstname = ''
    this.middlename = ''
    this.lastname = ''
    this.dob = null
    this.gender = ''
    this.phones = []
    this.diagnosis = ''
    this.todo = []
    this.initSeen = null
    this.lastSeen = null
  }
}

export class Medication {
  constructor () {
    this.id = ''
    this.name = ''
    this.dose = ''
    this.route = ''
    this.frequency = ''
  }
}
