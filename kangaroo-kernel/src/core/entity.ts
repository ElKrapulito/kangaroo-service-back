import { UUID } from 'crypto';
import { DomainEvent } from './domainEvent';
import { IBusinessRule } from './iBusinessRule';
import { BusinessRuleValidationException } from './businessRuleValidationException';

export abstract class Entity {
  abstract id: UUID;
  private readonly _domainEvents: DomainEvent[];

  public get domainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  protected constructor() {
    this._domainEvents = [];
  }

  public addDomainEvent(domainEvent: DomainEvent) {
    this._domainEvents.push(domainEvent);
  }

  protected checkRule(rule: IBusinessRule): void {
    if (!rule) {
      throw new Error('Rule cannot be null or undefined');
    }

    if (!rule.isValid()) {
      throw new BusinessRuleValidationException(rule);
    }
  }
}
