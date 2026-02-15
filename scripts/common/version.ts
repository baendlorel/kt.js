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

  major: number;
  minor: number;
  patch: number;

  constructor(versionStr: string) {
    const [major, minor, patch] = versionStr.split('.').map(Number);
    this.major = major;
    this.minor = minor;
    this.patch = patch;
  }

  bumpPatch() {
    this.patch += 1;
    return this;
  }

  toString() {
    return `${this.major}.${this.minor}.${this.patch}`;
  }

  duplicate() {
    return new Version(this.toString());
  }
}
