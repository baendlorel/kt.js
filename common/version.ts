export class Version {
  static max(...versions: Version[]) {
    return versions.reduce((max, v) => {
      if (v.major > max.major) {
        return v;
      }
      if (v.major < max.major) {
        return max;
      }
      if (v.minor > max.minor) {
        return v;
      }
      if (v.minor < max.minor) {
        return max;
      }
      if (v.patch > max.patch) {
        return v;
      }
      return max;
    }, versions[0]);
  }

  public major: number;
  public minor: number;
  public patch: number;
  public tail: string;

  constructor(versionStr: string) {
    const [major, minor, patch] = versionStr.split('.').map(Number);
    this.major = major;
    this.minor = minor;
    const tails = patch.toString().split('-');
    this.patch = Number(tails[0]);
    this.tail = tails[1] || '';
  }

  bumpPatch() {
    this.patch += 1;
    return this;
  }

  bumpMinor() {
    this.minor += 1;
    this.patch = 0;
    return this;
  }

  bumpMajor() {
    this.major += 1;
    this.minor = 0;
    this.patch = 0;
    return this;
  }

  toString() {
    return `${this.major}.${this.minor}.${this.patch}${this.tail ? `-${this.tail}` : ''}`;
  }

  duplicate() {
    return new Version(this.toString());
  }
}
