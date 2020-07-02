import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'fif', name: 'school', synchronize: false })
export default class SchoolEntity {
  @PrimaryColumn() schoolkey: string;

  @Column() schoolname: string;

  @Column() schooltype: string;

  @Column() schooladdress: string;

  @Column() schoolcity: string;

  @Column() schoolcounty: string;

  @Column() schoolstate: string;

  @Column() localeducationagencyname: string;

  @Column() localeducationagencykey: number;

  @Column() stateeducationagencyname: string;

  @Column() stateeducationagencykey: number;

  @Column() educationservicecentername: string;

  @Column() educationservicecenterkey: number;
}